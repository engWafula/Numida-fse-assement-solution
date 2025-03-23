import { useState } from "react";
import './index.css'

export const AddNewPayment = ({ onSubmit }:any) => {
    const [loanId, setLoanId] = useState('');
    const [paymentAmount, setPaymentAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        if (!loanId || !paymentAmount) {
            alert("Please fill in both fields.");
            return;
        }
        setLoading(true);
        await onSubmit({ loanId, paymentAmount });
        setLoanId('');
        setPaymentAmount('');
        setLoading(false);
    };

    return (
        <div className="add-payment-form">
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Payment Loan Id</label>
                    <input value={loanId} onChange={(e) => setLoanId(e.target.value)} />
                </p>
                <p>
                    <label>Payment Amount</label>
                    <input
                        value={paymentAmount}
                        type="number"
                        onChange={(e) => setPaymentAmount(e.target.value)}
                    />
                </p>
                <p>
                    <button type="submit" disabled={loading}>
                        {loading ? "Adding..." : "Add Payment"}
                    </button>
                </p>
            </form>
        </div>
    );
};