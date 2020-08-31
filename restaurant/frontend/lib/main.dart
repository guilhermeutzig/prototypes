import 'package:flutter/material.dart';
import './helpers/hexColor.dart';

void main() {
  runApp(
    MaterialApp(
      title: 'Restaurant',
      theme: ThemeData(fontFamily: 'Din'),
      home: Scaffold(
        backgroundColor: HexColor.fromHex('#7398FF'),
        body: Padding(
          padding: EdgeInsets.all(30.0),
          child: new Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              new Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  new Image.asset('assets/logo.png'),
                ]
              ),
              new Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  new Form(
                    child: Container(
                      width: MediaQuery.of(context).size.width,
                      child: TextFormField(
                      ),
                    ),
                  )
                ]
              )
            ],
          )
        )
      ),
    )
  );
}