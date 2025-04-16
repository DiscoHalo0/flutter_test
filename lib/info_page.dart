import 'package:flutter/material.dart';
import 'package:flutter_test_2/approfondimenti_page.dart';

class InfoPage extends StatelessWidget {
  final String item;
  final String description;

  const InfoPage({super.key, required this.item, required this.description});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Info - $item')),
      body: Stack(
        children: [
          SizedBox.expand(
            child: Image.asset(
              'assets/stanza1.jpeg',
              fit: BoxFit.cover,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const SizedBox(height: 50),
                  Text(
                    'Info su $item:',
                    style: const TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 20),
                  Text(
                    'Contenuto descrizione info: \n$description\n',
                    style: const TextStyle(fontSize: 18, color: Colors.white),
                  ),
                  const SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => ApprofondimentiPage(
                            item: item,
                            description: description,
                          ),
                        ),
                      );
                    },
                    child: const Text('Vai agli Approfondimenti'),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
