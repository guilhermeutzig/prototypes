import 'package:flutter/material.dart';
import './screens/home.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Hello Flutter',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Title in AppBar')
        ),
        body: Home()
      )
    );
  }
}