from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS)

# MySQL connection configuration
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="@admin17345",
    database="healthcare_analytics"
)

if db.is_connected():
    print("Connected to MySQL database")

cursor = db.cursor(dictionary=True)

# Route to check if patient data has been fetched
@app.route('/check_patient_data')
def check_patient_data():
    cursor.execute("SELECT COUNT(*) AS total_patients FROM patients")
    result = cursor.fetchone()
    total_patients = result['total_patients']
    if total_patients > 0:
        return 'Patient data has been fetched successfully!'
    else:
        return 'No patient data found.'


# Route for getting all patients
@app.route('/api/patients', methods=['GET'])
def get_patients():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM patients")
    patients = cursor.fetchall()
    cursor.close()
    return jsonify(patients)

# Route for adding a new patient
@app.route('/api/patients', methods=['POST'])
def add_patient():
    data = request.get_json()
    admission_date = data.get('admission_date', None)
    cursor = db.cursor()
    query = "INSERT INTO patients (name, age, gender, email, phone, address,admission_date) VALUES (%s, %s, %s, %s, %s, %s,%s)"
    values = (data['name'], data['age'], data['gender'], data['email'], data['phone'], data['address'],data['admission_date'])
    cursor.execute(query, values)
    db.commit()
    patient_id = cursor.lastrowid
    cursor.close()
    return jsonify({'patient_id': patient_id})


# Route for updating a patient
@app.route('/api/patients/<int:patient_id>', methods=['PUT'])
def update_patient(patient_id):
    data = request.get_json()
    cursor = db.cursor()
    query = "UPDATE patients SET name = %s, age = %s, gender = %s, email = %s, phone = %s, address = %s,diagnosis = %s, admission_date = %s,WHERE patient_id = %s"
    values = (data['name'], data['age'], data['gender'], data['email'], data['phone'], data['address'], data['diagnosis'], data['admission_date'],patient_id)
    cursor.execute(query, values)
    db.commit()
    cursor.close()
    return jsonify({'message': 'Patient updated successfully'})

# Route for deleting a patient
@app.route('/api/patients/<int:patient_id>', methods=['DELETE'])
def delete_patient(patient_id):
    cursor = db.cursor()
    query = "DELETE FROM patients WHERE patient_id = %s"
    values = (patient_id,)
    cursor.execute(query, values)
    db.commit()
    cursor.close()
    return jsonify({'message': 'Patient deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)