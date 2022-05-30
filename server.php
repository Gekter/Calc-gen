<?php

if (isset($_GET['a']) && isset($_GET['b']) && isset($_GET['op']))
    switch ($_GET['op']) {
        case '+':
            echo $_GET['a'] + $_GET['b'];
            break;
        case '-':
            echo $_GET['a'] - $_GET['b'];
            break;
        case '*':
            echo $_GET['a'] * $_GET['b'];
            break;
        case '/':
            if ($_GET['b'] == 0) {
                echo 'Division by zero';
                break;
            }
            echo $_GET['a'] / $_GET['b'];
            break;
        case '%':
            echo $_GET['a'] % $_GET['b'];
            break;
        default:
            echo 'Operation error '.$_GET['op'];
            break;
    }
    die();
?>