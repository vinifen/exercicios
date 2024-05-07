/*TESTE DE MESA – Considere o seguinte trecho de código, implementado em TypeScript, dentro do
método main(). Qual é o valor de aux ao final da execução?*/

let a = 8, b = 16, c = 4, aux = 0;
if (a > b)
{
aux = a;
a = b;
b = aux;
}
if (b > c)
{
aux = b;
b = c;
c = aux;
if (a > b)
{
aux = a;
a = b;
b = aux;
}
}
console.log(aux);

//resposta = 8