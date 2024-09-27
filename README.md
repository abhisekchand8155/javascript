# javascript
javascript:-

  -it is used for building logics of a web page 
  -javascript is a high lavel programming language used in both client side and server side 
  -javascript is comes from echma script so we see the latest version of javascript in the form of echma script
  -now we used javascript version 6 i.e (echma-script 6)
  -in anathor way we called ES6 as the vanilla javascript.
  -Node Js is the runtime environment of javascript 

Varriable :-

    -varriable is a container which is store some data 
    -In java script there are 3 types of varriable are there 
    1.let :-
        -it is a type of varriable which is used for changing the varriable name latter
        -now these days , most of the case used let for creating varriable 
        -let is a block scope code so we have used let for most of the cases 
    2.var :-
        -it is a type of varriable which is also used for changing the varriable in latter stage 
        -var is used in oldest browser . now a days we don't use var most of the cases  
    3.const :-


    Rules for creating varriable name:-
        -Varriable name are case sensative "a" & "A" are different 
        -only letter , digit, underscore & special character is allowed (not even white space)
        -Only lletter , underscore or special character should be the 1st character only
        -ex- today_is="Monday"
        -resvered words can not be a varriable name. ex-for,while 
        -


Data Types in Js:-
        -datatypes is an attribute is associated with a pice of data that tells a compyter how to interprit its value
        -In datatype we used "typeof" of operator to know that what type of data is used 
        -Mainly in javascript there are 2 types og datatype we used 
            1-Primitive
                -in javascript there are 7 types of primitive datatypes we used 
                    1-Number :-it contain some numerical value
                    2-Bollean :-we get the bollean value like true/false
                    3-Undefined :-data is not define
                    4-Null :-in this datatype we get null for the value means nothing.
                    5-bigInt :-in bigInt we get big intiger value "-999999999 to +999999999" on the above
                    6-String :-it is a type of datatype that can be hold some character like "name or word  .... etc"
                    7-Symbol :-in symbol we get one symbol of more than one values
            2-Reference Datatypes :-
                    
                    -Reference datatype are the type of datatype which can hold multiple element in a single time
                    -Reference datatypes are  -> array, object , Function

                    1. Array :-
                        -Array is a datatype where we can store similar type of data is a contigious memory location
                        -array index starting from "0"
                        ex- let arr=["ram", "hari" , "sita", "bharat"]
                                        0      1        2       3
                        

                    2.Object :-
                        -Object is a reference type of datatype where we can store more than one element in a single entity
                        -mainly objects are working on (key:value) pair

                        ex:-
                        let emp1={
                        "name" : "sonu kumar"
                        "age"  : "75"
                        "address" : "bhubaneswar"
                        "mobile number" : "7809148927"
                        "salary" : "5600023"
                        }

                        -in the above example we can see that the left hand side element are the keys and the right hand side element are values so we can tell that about object is a key:value pair structure

                    3.Function:-
                        -in function , we repeatly do the task in fumction
                        -function reduce our code complexcity & time space complexcity
                        -syntax
                        //function
                        function my_schedule(){
                            console.log("we wake up at 6 pm")
                            console.log("then we go to morning wolk")
                            console.log("we go to our college for time pass")
                        }
                        //function calling
                        my_schedule()

Operator in js:-
    -Operator are the key features to do some task or operates some task
    -ex:-  A+B
    -In the above example A,B are the operands & + is the operator
    -There are five types of operator are present in javascript

        1.Arithmatic Operator (+,-,*,/,) , %(modulus) , **(exponnentiation)
        2.Logical operator:-logical AND(&&) , logical OR(||) , logical(!)

        A       B       (A && B)
        T       T           T
        T       F           F
        F       T           F
        F       F           F

        A       B       (A || B)
        T       T           T
        T       F           T
        F       T           T
        F       F           F

        3.Assignment Operator :-(=.+=,-=,*=,%=,**=)
        4.Unary operator :- increament(++) , decreament(--)
        5.Comparision Operator :- (== , !== , === etc..)


Conditional Statement:-
    -To impliment some condition in the code
    -there are 3 type of conditional statement 
        1.If-condition
            -if condition is true then statement is true
            -syntax
            if(condition){
                statement
            }

        2.If-else condition
            -if condition is true then statement is true otherwise false
            -syntax
                if(condition){
                    statement
                }else{
                    statement
                }

        3.If-elif condition
            -it check the condition multiple time . wheather the condition is true
            -syntax
               if(condition){
                statement
               }else if (condition){
                statement
               }else if (condition){
                statement
                }else{
                    statement
                }


task:-
 -write a code which can give grades to student according to their scores 
    1.80-100 (A)
    2.70-79(B)
    3.60-59(c)
    4.50-59(D)
    5.0-49(fail-go to anganbadi)