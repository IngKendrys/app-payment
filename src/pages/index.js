import { useState } from "react";

export default function PaymentGateway() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [amount, setAmount] = useState("");
  const [showReceipt, setShowReceipt] = useState(false);

  const handlePayment = () => {
    setShowReceipt(true);
    setTimeout(() => setShowReceipt(false), 4000);
    setPaymentMethod(false);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-blue-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-2"> 💲Sistema de Pago💲 </h1>
      <br/>
      <h2 className="text-xl mb-4">Selecciona un método de pago</h2>
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${paymentMethod === "creditcard" ? "bg-blue-500 text-white" : "bg-white"}`}
          onClick={() => setPaymentMethod("creditcard")}
        >
          💳 Crédito
        </button>
        <button
          className={`px-4 py-2 rounded ${paymentMethod === "debitcard" ? "bg-blue-500 text-white" : "bg-white"}`}
          onClick={() => setPaymentMethod("debitcard")}
        >
          💵 Débito
        </button>
        <button
          className={`px-4 py-2 rounded ${paymentMethod === "paypal" ? "bg-blue-500 text-white" : "bg-white"}`}
          onClick={() => setPaymentMethod("paypal")}
        >
          🅿️ PayPal
        </button>
      </div>
      {paymentMethod && (
        <div className="w-64 p-4 bg-white shadow-lg rounded-lg text-center">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Monto
          </label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded mb-4 text-center"
            placeholder="Ingrese el monto"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button 
            className="w-full bg-green-500 text-white py-2 rounded" 
            onClick={handlePayment}
          >
            Pagar
          </button>
        </div>
      )}
      {showReceipt && (
        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg text-center border border-gray-300 animate-slide">
          <p className="font-bold text-lg">Recibo</p>
          <p>Monto: ${amount}</p>
          <p>Método: {paymentMethod === "credit" ? "Tarjeta de Crédito" : paymentMethod === "debit" ? "Tarjeta de Débito" : "PayPal"}</p>
          <p className="text-green-600 font-semibold mt-2">Pago exitoso ✅</p>
        </div>
      )}
    </div>
  );
}
