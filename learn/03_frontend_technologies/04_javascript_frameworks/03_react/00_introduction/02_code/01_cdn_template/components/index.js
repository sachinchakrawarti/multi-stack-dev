<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>React CDN Template</title>

    <script src="https://unpkg.com/react@19/umd/react.development.js"></script>

    <script src="https://unpkg.com/react-dom@19/umd/react-dom.development.js"></script>

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <style>

        body{
            font-family:Arial;
            background:#f4f4f4;
            margin:20px;
        }

        .card{
            background:white;
            padding:20px;
            margin:15px 0;
            border-radius:10px;
            box-shadow:0 2px 8px rgba(0,0,0,.15);
        }

        button{
            padding:10px 20px;
            cursor:pointer;
        }

    </style>

</head>

<body>

<div id="root"></div>

<script type="text/babel" src="./components/Alert.jsx"></script>
<script type="text/babel" src="./components/Button.jsx"></script>
<script type="text/babel" src="./components/Card.jsx"></script>
<script type="text/babel" src="./components/Counter.jsx"></script>
<script type="text/babel" src="./components/Footer.jsx"></script>
<script type="text/babel" src="./components/Header.jsx"></script>
<script type="text/babel" src="./components/ProductList.jsx"></script>
<script type="text/babel" src="./components/UserCard.jsx"></script>
<script type="text/babel" src="./components/index.js"></script>

<script type="text/babel" src="./App.jsx"></script>

</body>

</html>