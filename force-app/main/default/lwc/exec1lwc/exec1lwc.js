import { LightningElement, track } from 'lwc';

export default class Exec1lwc extends LightningElement {
    @track firstNumber;
    @track secondNumber;

    mostra = false;

    resultValue;

    handleNumberOeChange(event) {
        this.firstNumber = parseInt(event.target.value);
    }
    handleNumberTwoChange(event) {
        this.secondNumber = parseInt(event.target.value);
    }
    addition() {
        this.resultValue = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    multification() {
        this.resultValue = this.firstNumber * this.secondNumber;
    }
    subtraction() {
        this.resultValue = this.firstNumber - this.secondNumber;
    }
    division() {
        this.resultValue = this.firstNumber / this.secondNumber;
    }
    division() {
        if (this.firstNumber == 0 || this.secondNumber == 0) {
            alert("Não é possivi")}
    }

    handleOnClick() {
        this.mostra = !this.mostra;
    }

    handleClickClear(){
        this.resultValue = "";
        this.firstNumber = "";
        this.secondNumber = "";
    }
}