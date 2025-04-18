import 'package:flutter/material.dart';

class ApprofondimentiPage extends StatelessWidget {
  final String item;
  final String description;

  const ApprofondimentiPage({
    super.key,
    required this.item,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Approfondimenti - $item')),
      body: Stack(
        children: [
          // Sfondo
          SizedBox.expand(
            child: Image.asset(
              'assets/stanza1.jpeg',
              fit: BoxFit.cover,
            ),
          ),
          // Contenuto
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const SizedBox(height: 50),
                  Text(
                    'Approfondimenti su $item',
                    style: const TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 20),
                  Text(
                    'Contenuto dettagliato:\n\n$description\n\nQui puoi aggiungere altre informazioni specifiche o dinamiche a seconda dell’item.',
                    style: const TextStyle(
                      fontSize: 18,
                      color: Colors.white,
                    ),
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

