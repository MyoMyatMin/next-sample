export async function GET(request, { params }) {
  const amount = parseFloat(params.amount);
  const rate = parseFloat(process.env.VAT_RATE);
  const vat = (Math.round(amount * rate, 2) * 100) / 100;
  return Response.json({
    rate,
    amount,
    vat,
  });
}
