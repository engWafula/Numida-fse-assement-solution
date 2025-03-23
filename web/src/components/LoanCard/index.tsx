import React from 'react';
import './index.css';

interface Payment {
    paymentDate: string;
}

interface Loan {
    id: string;
    name: string;
    principal: number;
    interestRate: number;
    dueDate: string;
    payments: Payment[];
}

interface LoanCardProps {
    loan: Loan;
}

const getPaymentStatus = (dueDate: string, paymentDate: string | null): string => {
    if (!paymentDate) return 'Unpaid';

    const due = new Date(dueDate);
    const paid = new Date(paymentDate);
    const diffInDays = Math.floor((paid.getTime() - due.getTime()) / (1000 * 60 * 60 * 24));

    if (diffInDays <= 5 && diffInDays >= 0) return 'On Time';
    if (diffInDays > 5 && diffInDays <= 30) return 'Late';
    if (diffInDays > 30) return 'Defaulted';

    return 'On Time'; 
};

const LoanCard: React.FC<LoanCardProps> = ({ loan }) => {
    const paymentDate = loan.payments.length > 0 ? loan.payments[0].paymentDate : null;
    const status = getPaymentStatus(loan.dueDate, paymentDate);

    return (
        <div className="loan-card">
            <h2 className="loan-title">{loan.name}</h2>
            <p><strong>Interest Rate:</strong> {loan.interestRate}%</p>
            <p><strong>Principal:</strong> ${loan.principal.toLocaleString()}</p>
            <p><strong>Due Date:</strong> {new Date(loan.dueDate).toDateString()}</p>
            <p><strong>Payment Date:</strong> {paymentDate ? new Date(paymentDate).toDateString() : 'Unpaid'}</p>
            <p><strong>Status:</strong> <span className={`status ${status.replace(/\s/g, '-').toLowerCase()}`}>{status}</span></p>
        </div>
    );
};

export default LoanCard;
