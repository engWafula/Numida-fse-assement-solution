import "./App.css";
import { useQuery } from "@apollo/client";
import LoanCard from "./components/LoanCard";
import { AddNewPayment } from "./components/NewPayment";
import Loader from "./components/Loader";
import ErrorComponent from "./components/Error";
import { BaseUrl } from "./lib/utils/BaseUrl";
import { GET_LOANS_AND_PAYMENTS } from "./lib/queries/loans";



function App() {
  const { loading, error, data, refetch } = useQuery(GET_LOANS_AND_PAYMENTS);

  if (loading) return <Loader />;
  if (error) return <ErrorComponent message={`Error: ${error.message}`} />; 

  const loans = data?.loans || [];

  const handleAddPayment = async ({ loanId, paymentAmount }: {loanId:string,paymentAmount:string}) => {
    try {
      const response = await fetch(`${BaseUrl}/api/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loanId, paymentAmount }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const payment = await response.json();
      refetch();
      console.log(`Payment added:`, payment);
    } catch (error) {
      console.error("Error adding payment:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>Add New Payment</h1>
      <div className="new-payment-form-container">
        <AddNewPayment onSubmit={handleAddPayment} />
      </div>

      <h1>Existing Loans & Payments</h1>
      <div className="loan-cards">
        {loans.map((loan: any) => (
          <LoanCard key={loan.id} loan={loan} />
        ))}
      </div>
    </div>
  );
}

export default App;
