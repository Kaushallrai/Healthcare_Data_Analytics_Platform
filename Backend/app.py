from flask import Flask, request, jsonify
import pandas as pd
import pickle
from scipy.stats import mode
from flask_cors import CORS
import joblib
import numpy as np
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)
CORS(app)

# Load Models
final_svm_model = joblib.load('final_svm_model.pkl')
final_nb_model = joblib.load('final_nb_model.pkl')
final_rf_model = joblib.load('final_rf_model.pkl')

DATA_PATH = "./Training.csv"
data = pd.read_csv(DATA_PATH).dropna(axis=1)

# Splitting the data into X and y
X = data.iloc[:, :-1]
y = data.iloc[:, -1]

encoder = LabelEncoder()
data["prognosis"] = encoder.fit_transform(data["prognosis"])

symptoms = X.columns.values

# Creating a symptom index dictionary to encode the
# input symptoms into numerical form
symptom_index = {}
for index, value in enumerate(symptoms):
    symptom = " ".join([i.capitalize() for i in value.split("_")])
    symptom_index[symptom] = index

data_dict = {
    "symptom_index": symptom_index,
    "predictions_classes": encoder.classes_
}

def predictDisease(symptoms):
    symptoms = symptoms.split(",")[:3]

    # creating input data for the models
    input_data = [0] * len(data_dict["symptom_index"])
    for symptom in symptoms:
        # Convert the symptom to lowercase and capitalize first letter
        symptom_formatted = symptom.lower().capitalize()
        index = data_dict["symptom_index"].get(symptom_formatted)
        if index is not None:
            input_data[index] = 1
        else:
            print(f"Symptom '{symptom}' not found in symptom_index dictionary.")

    # reshaping the input data and converting it
    # into suitable format for model predictions
    input_data = np.array(input_data).reshape(1, -1)

    # generating individual outputs
    rf_prediction = data_dict["predictions_classes"][final_rf_model.predict(
        input_data)[0]]
    nb_prediction = data_dict["predictions_classes"][final_nb_model.predict(
        input_data)[0]]
    svm_prediction = data_dict["predictions_classes"][final_svm_model.predict(
        input_data)[0]]

    # making final prediction using custom logic to find mode
    predictions_list = [rf_prediction, nb_prediction, svm_prediction]
    final_prediction = max(set(predictions_list), key=predictions_list.count)

    predictions = {
        "rf_model_prediction": rf_prediction,
        "naive_bayes_prediction": nb_prediction,
        "svm_model_prediction": svm_prediction,
        "final_prediction": final_prediction
    }
    return predictions


@app.route('/predict', methods=['POST'])
def predict():
    symptoms = request.json['symptoms']
    predictions = predictDisease(symptoms)
    print(predictions)
    return jsonify(predictions)


if __name__ == '__main__':
    app.run(debug=True)
