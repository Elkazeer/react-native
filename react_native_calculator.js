//https://www.youtube.com/watch?v=f3K2QuFH9yc&list=PLYxzS__5yYQlHANFLwcsSzt3elIbYTG1h&index=12

import React, {Component} from 'react';
import{ StyleSheet, Text, View, TouchableOpacity, Button, Animate} from 'react-native';

export default class App extends Component{
    constructor(){
        super()
        this.state = {
            resultText: "",
            calculationText: ""
        }
    }

    calculateResult (){
        const text = this.state.calculationText;
        //parsing and performing all operations
        this.setState({
            resultText: eval(text)
        })
    }

    validate(){
        const text = this.state.calculationText;
        switch(text.slice(-1)){
          case '+':
          case '-':
          case '*':
          case '/':
            return false
        }
        return true
    }

    buttonPressed (text){

        if(text == '='){
          return this.validate() && this.calculateResult()
        }

        this.setState({
            resultText: this.state.resultText,
            calculationText: this.state.calculationText+text
        })
    }

    operate (operation){
      let text = this.state.calculationText.split('')
      let res = this.state.resultText.split('')
      //let op = this.state.calculationText
        switch(operation){
          case 'd':
              text.pop()
              this.setState({
                calculationText: text.join('')
              })
              break;
          case '+':
          case '-':
          case '*':
          case '/':
              if(this.state.text == '') return
              this.setState({
                calculationText: this.state.calculationText + operation
              })
      }
    }


    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.calculation}>
                    <Text style = {styles.calculationText}>{this.state.calculationText}</Text>
                </View>
                <View style = {styles.result}>
                    <Text style = {styles.resultText}>{this.state.resultText}</Text>
                </View>
                <View style = {styles.keypad}>
                    <View style = {styles.numbers}>
                        <View style = {styles.row}>
                            <TouchableOpacity onPress = { () => this.buttonPressed(7)} style = {styles.btn}>
                              <Text style = {styles.btntext}>7</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { () => this.buttonPressed(8)} style = {styles.btn}>
                              <Text style = {styles.btntext}>8</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { () => this.buttonPressed(9)} style = {styles.btn}>
                              <Text style = {styles.btntext}>9</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.row}>
                            <TouchableOpacity onPress = { () => this.buttonPressed(4)} style = {styles.btn}>
                              <Text style = {styles.btntext}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { () => this.buttonPressed(5)} style = {styles.btn}>
                              <Text style = {styles.btntext}>5</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { () => this.buttonPressed(6)} style = {styles.btn}>
                              <Text style = {styles.btntext}>6</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.row}>
                            <TouchableOpacity onPress = { () => this.buttonPressed(1)} style = {styles.btn}>
                              <Text style = {styles.btntext}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { () => this.buttonPressed(2)} style = {styles.btn}>
                              <Text style = {styles.btntext}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { () => this.buttonPressed(3)} style = {styles.btn}>
                              <Text style = {styles.btntext}>3</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.row}>
                            <TouchableOpacity onPress = { () => this.buttonPressed(".")} style = {styles.btn}>
                              <Text style = {styles.btntext}>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { () => this.buttonPressed(0)} style = {styles.btn}>
                              <Text style = {styles.btntext}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = { () => this.buttonPressed("=")} style = {styles.btn}>
                              <Text style = {styles.btntext}>=</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {styles.operations}>
                        <TouchableOpacity onPress = { () => this.operate("d")} style = {styles.btn}>
                              <Text style = {styles.btntext}>DEL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = { () => this.operate("+")} style = {styles.btn}>
                              <Text style = {styles.btntext}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = { () => this.operate("-")} style = {styles.btn}>
                              <Text style = {styles.btntext}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = { () => this.operate("*")} style = {styles.btn}>
                              <Text style = {styles.btntext}>x</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = { () => this.operate("/")} style = {styles.btn}>
                              <Text style = {styles.btntext}>÷</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btntext: {
        fontSize: 27,
        color: '#00b1d2'    //blue
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    calculationText: {
        fontSize: 44,
        paddingRight: 10,
        color: 'black'
    },
    resultText: {
        fontSize: 30,
        paddingRight: 10,
        color: 'white'
    },
    calculation: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#c7d3d4'     //grey
    },
    result: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#422057'     //royal purple
    },
    keypad: {
        flex: 7,
        flexDirection: 'row' 
    },
    numbers: {
        flexGrow: 3, 
        backgroundColor: '#fddb27'     //yellow    
    },
    operations: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: 'black'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
