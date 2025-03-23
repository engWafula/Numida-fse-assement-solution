import datetime
from flask import Flask, request, jsonify
from flask_graphql import GraphQLView
from flask_cors import CORS
import graphene

app = Flask(__name__)
CORS(app)

# Sample data
loans = [
    {"id": 1, "name": "Tom's Loan", "interest_rate": 5.0, "principal": 10000, "due_date": datetime.date(2025, 3, 1)},
    {"id": 2, "name": "Chris Wailaka", "interest_rate": 3.5, "principal": 500000, "due_date": datetime.date(2025, 3, 1)},
    {"id": 3, "name": "NP Mobile Money", "interest_rate": 4.5, "principal": 30000, "due_date": datetime.date(2025, 3, 1)},
    {"id": 4, "name": "Esther's Autoparts", "interest_rate": 1.5, "principal": 40000, "due_date": datetime.date(2025, 3, 1)},
]

loan_payments = [
    {"id": 1, "loan_id": 1, "payment_date": datetime.date(2024, 3, 4)},
    {"id": 2, "loan_id": 2, "payment_date": datetime.date(2024, 3, 15)},
    {"id": 3, "loan_id": 3, "payment_date": datetime.date(2024, 4, 5)},
]

# GraphQL Schema
class LoanPayment(graphene.ObjectType):
    id = graphene.Int()
    loan_id = graphene.Int()
    payment_date = graphene.Date()

class ExistingLoans(graphene.ObjectType):
    id = graphene.Int()
    name = graphene.String()
    interest_rate = graphene.Float()
    principal = graphene.Int()
    due_date = graphene.Date()
    payments = graphene.List(LoanPayment)

    def resolve_payments(self, info):
        return [LoanPayment(**payment) for payment in loan_payments if payment["loan_id"] == self.id]

class Query(graphene.ObjectType):
    loans = graphene.List(ExistingLoans)

    def resolve_loans(self, info):
        return [ExistingLoans(**loan) for loan in loans]


schema = graphene.Schema(query=Query)

# Flask routes
app.add_url_rule(
    "/graphql", view_func=GraphQLView.as_view("graphql", schema=schema, graphiql=True)
)

@app.route("/api/payments", methods=["POST"])
def add_payment():
    data = request.json
    new_payment = {
        "id": len(loan_payments) + 1,  
        "loan_id": data["loanId"],
        "payment_date": datetime.date.today(),  
        "amount": data["paymentAmount"]  
    }

    loan_payments.append(new_payment)
    return jsonify(new_payment), 201

@app.route("/")
def home():
    return "Welcome to the Loan Application API"

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)