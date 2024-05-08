# import pandas as pd
# import numpy as np
# import joblib

# # Function to get user input for testing
# def get_user_input():
#     age = int(input("Enter age: "))
#     sex = int(input("Enter sex (0 for female, 1 for male): "))
#     cp = int(input("Enter cp (0 for typical angina, 1 for atypical angina, 2 for non-anginal pain, 3 for asymptomatic): "))
#     trestbps = int(input("Enter trestbps (resting blood pressure in mm Hg): "))
#     chol = int(input("Enter chol (serum cholesterol in mg/dl): "))
#     fbs = int(input("Enter fbs (fasting blood sugar > 120 mg/dl, 0 for False, 1 for True): "))
#     restecg = int(input("Enter restecg (resting electrocardiographic results, 0 for normal, 1 for having ST-T wave abnormality, 2 for showing probable or definite left ventricular hypertrophy): "))
#     thalach = int(input("Enter thalach (maximum heart rate achieved): "))
#     exang = int(input("Enter exang (exercise induced angina, 0 for No, 1 for Yes): "))
#     oldpeak = float(input("Enter oldpeak (ST depression induced by exercise relative to rest): "))
#     slope = int(input("Enter slope (slope of the peak exercise ST segment, 0 for upsloping, 1 for flat, 2 for downsloping): "))
#     ca = int(input("Enter ca (number of major vessels (0-3) colored by flourosopy): "))
#     thal = int(input("Enter thal (thalassemia, 0 for normal, 1 for fixed defect, 2 for reversable defect): "))

#     user_input = pd.DataFrame({
#         'age': [age],
#         'sex': [sex],
#         'cp': [cp],
#         'trestbps': [trestbps],
#         'chol': [chol],
#         'fbs': [fbs],
#         'restecg': [restecg],
#         'thalach': [thalach],
#         'exang': [exang],
#         'oldpeak': [oldpeak],
#         'slope': [slope],
#         'ca': [ca],
#         'thal': [thal]
#     })

#     return user_input

# # Load the trained SVM model
# svm_model = joblib.load('./Heart disease prediction/Models/svm_model.pkl')

# # Get user input
# user_input = get_user_input()

# # Apply the same preprocessing steps as during training
# user_input_encoded = pd.get_dummies(user_input, columns=['cp', 'restecg', 'thal'], drop_first=True)

# # Get the feature names expected by the model
# scaler = svm_model.named_steps['scaler']
# expected_features = scaler.get_feature_names_out()

# # Ensure that all the necessary columns are present and in the correct order
# missing_cols = set(expected_features) - set(user_input_encoded.columns)
# for col in missing_cols:
#     user_input_encoded[col] = 0
# user_input_encoded = user_input_encoded[expected_features]

# # Make prediction using the model
# svm_prediction = svm_model.predict(user_input_encoded)
# svm_probs = svm_model.predict_proba(user_input_encoded)

# # Print the prediction
# print("SVM Prediction:", svm_prediction[0])
# print("SVM Probabilities:", svm_probs[0])





# import pandas as pd
# import joblib

# # Load the trained model
# random_forest_model = joblib.load('../Backend/Heart disease prediction/Models/random_forest_model.pkl')

# # Get the feature names used in the model
# feature_names = random_forest_model.feature_names_in_
# print("Features used in the model:", feature_names)

# # Load the test data
# test_data = pd.DataFrame({
#     'age': [55, 63, 58, 60, 48],
#     'sex ': [0, 1, 1, 0, 1],
#     'chest pain type': [3, 4, 2, 1, 4],
#     'resting blood pressure': [140, 145, 120, 130, 130],
#     'serum cholestoral': [260, 233, 394, 264, 275],
#     'fasting blood sugar': [0, 0, 0, 1, 0],
#     'resting electrocardiographic results': [0, 2, 2, 2, 0],
#     'max heart rate': [150, 150, 150, 120, 180],
#     'exercise induced angina': [0, 1, 0, 1, 0],
#     'oldpeak': [0.8, 2.3, 1.8, 3.0, 0.2],
#     'ST segment': [1, 0, 2, 2, 2],
#     'major vessels': [0, 0, 2, 1, 0],
#     'thal': [3, 3, 7, 3, 3]
# })

# # Selecting relevant features for prediction
# test_data_selected = test_data[feature_names]

# # Make predictions using the model
# predictions = random_forest_model.predict(test_data_selected)
# print("Predictions:", predictions)
# print("Expected values:", [0,0,1,1,0])




# import pandas as pd
# import joblib

# # Load the trained Random Forest model
# rf_model = joblib.load('../Backend/Diabetes prediction/Models/rf_model.pkl')

# # Test data
# test_data = pd.DataFrame({
#     'Pregnancies': [3, 7, 4, 5, 0],
#     'Glucose': [110, 155, 120, 140, 90],
#     'BloodPressure': [70, 82, 76, 88, 66],
#     'SkinThickness': [30, 35, 32, 40, 20],
#     'Insulin': [0, 0, 0, 150, 0],
#     'BMI': [28.6, 35.3, 29.0, 31.6, 24.4],
#     'DiabetesPedigreeFunction': [0.256, 0.597, 0.349, 0.867, 0.315],
#     'Age': [33, 50, 28, 45, 26]
# })


# # Select the relevant columns for prediction
# columns_for_prediction = ['Pregnancies', 'Glucose', 'BloodPressure', 
#                           'SkinThickness', 'Insulin', 'BMI', 
#                           'DiabetesPedigreeFunction', 'Age']

# # Extract the selected columns from the test data
# test_data_selected = test_data[columns_for_prediction]

# # Make predictions using the loaded model
# predictions = rf_model.predict(test_data_selected)

# # Print the predictions
# print("Predictions:", predictions)
# # Print the expected values
# print("Expected values:", [0, 1, 0, 1, 0])