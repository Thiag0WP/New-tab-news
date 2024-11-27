//request trata o que esta entrando de fora no sistema e o response trata do que voce quer responder la pra fora
function status(request, response) {
    response
        .status(200)
        .json({ chave: "Curso.dev e o melhor curso de programaçao" });
}

export default status;
