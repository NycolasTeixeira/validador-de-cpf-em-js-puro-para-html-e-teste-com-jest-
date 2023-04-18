const cpf = require("../js");

//testa o primeiro digito cpf 11144477735
test("primeiro digito 11144477735", () => {
    const result = cpf.algoritmoCpf1("11144477735");
    expect(result).toBe(true);
});

//testa o segundo digito cpf 11144477735
test("segundo digito 11144477735", () => {
    const result = cpf.algoritmoCpf2("11144477735");
    expect(result).toBe(true);
});

//testa o primeiro digito cpf 97752525391
test("primeiro digito 97752525391", () => {
    const result = cpf.algoritmoCpf1("97752525391");
    expect(result).toBe(true);
});

//testa o segundo digito cpf 97752525391

test("segundo digito 97752525391", () => {
    const result = cpf.algoritmoCpf2("97752525391");
    expect(result).toBe(true);
});

//testa o primeiro digito 15915815769
test("primeiro digito 15915815769", () => {
    const result = cpf.algoritmoCpf1("15915815769");
    expect(result).toBe(false);
});

//testa o segundo digito 15915815769

test("segundo digito 15915815769", () => {
    const result = cpf.algoritmoCpf2("15915815769");
    expect(result).toBe(false);
});

// testa o primeiro digito 11111111111
test("primeiro digito 11111111111", () => {
    const result = cpf.algoritmoCpf1("11111111111");
    expect(result).toBe(true);
});

//testa o segundo digito 11111111111

test("segundo digito 11111111111", () => {
    const result = cpf.algoritmoCpf2("11111111111");
    expect(result).toBe(true);
});


// testa o primeiro digito 73176066180
test("primeiro digito 73176066180", () => {
    const result = cpf.algoritmoCpf1("73176066180");
    expect(result).toBe(true);
});

//testa o segundo digito 73176066180

test("segundo digito 73176066180", () => {
    const result = cpf.algoritmoCpf2("73176066180");
    expect(result).toBe(false);
});