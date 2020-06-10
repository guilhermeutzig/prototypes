import 'package:flutter/material.dart';

void main() {
  runApp(
    Container(
      decoration: new BoxDecoration(color: Colors.red),
      child: Center(
        child: Text(
          'Hello, World!',
          textDirection: TextDirection.ltr,
        ),
      )
    )
  );
}