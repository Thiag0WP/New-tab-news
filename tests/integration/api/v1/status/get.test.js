test("GET to /api/v1/status should return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/status"); //para usar await tem que ser uma função assincrona(colocar async junto com a arrow function)
    //await = esperar o retorno do fectch
    expect(response.status).toBe(200);
});
