$('.generator').on('click', function() {
  const processId = $(this).closest(".processor").attr("id")
  const computerData = $(this).closest(".computer").data().id
  const bus = $(this).closest(".computer").find(".BUS").text()

  console.log("Processor ID: " + processId);
  console.log("Computer's data-id: " + computerData);
  console.log("BUS: " + bus);
})

$('.validator').on('click', function() {
  const generatorText = $(this).closest(".generator").text()
  const QRs = $(this).closest(".QR").text()
  const MB = $(this).closest(".computer").find(".MB").text()

  console.log("Generator Text: " + generatorText);
  console.log("MB: " + MB);
  console.log("QR: " + QRs);
})