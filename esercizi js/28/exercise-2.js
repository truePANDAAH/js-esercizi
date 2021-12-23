const order = {};

if (order?.customer?.address && !order?.customer?.address?.city) {
  console.log('City is required');
}