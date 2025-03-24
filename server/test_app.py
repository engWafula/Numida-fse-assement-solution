import unittest
import json
from app import app 

class FlaskAppTests(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client() 
        self.app.testing = True

    def test_home(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Welcome to the Loan Application API', response.data)

    def test_add_payment(self):
        response = self.app.post('/api/payments', 
                                 data=json.dumps({"loanId": 1, "paymentAmount": 100}),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 201)
        self.assertIn(b'payment_date', response.data)

    def test_add_payment_missing_loanId(self):
        response = self.app.post('/api/payments', 
                                 data=json.dumps({"paymentAmount": 100}),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 400)
        self.assertIn(b'loanId is required', response.data)

    def test_add_payment_missing_paymentAmount(self):
        response = self.app.post('/api/payments', 
                                 data=json.dumps({"loanId": 1}),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 400)
        self.assertIn(b'paymentAmount is required and should be a positive number', response.data)

    def test_add_payment_invalid_paymentAmount(self):
        response = self.app.post('/api/payments', 
                                 data=json.dumps({"loanId": 1, "paymentAmount": -50}),
                                 content_type='application/json')
        self.assertEqual(response.status_code, 400)
        self.assertIn(b'paymentAmount is required and should be a positive number', response.data)

if __name__ == '__main__':
    unittest.main() 