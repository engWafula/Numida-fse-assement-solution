import { useMemo } from 'react';

interface LoanCalculatorProps {
    principal: number;
    rate: number;
    months: number;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({ principal = 0, rate = 0, months = 0 }) => {
    const interest = useMemo(() => {
        return principal > 0 && rate > 0 && months > 0 ? (principal * rate * months) / (100 * 12) : 0;
    }, [principal, rate, months]); 

    return (
        <div>
            <h3>Loan Interest: ${interest.toFixed(2)}</h3>
        </div>
    );
};
