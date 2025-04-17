import 'package:flutter/material.dart';
import 'item_domande.dart';

void main() => runApp(const MaterialApp(home: ListViewTest()));

class ListViewTest extends StatelessWidget {
  const ListViewTest({super.key});

  @override
  Widget build(BuildContext context) {
    final items = itemDomande.keys.toList();

    return Scaffold(
      appBar: AppBar(title: const Text('Learning ListView')),
      body: Stack(
        children: [
          SizedBox.expand(
            child: Image.asset('assets/prova1.jpeg', fit: BoxFit.cover),
          ),
          ListView.builder(
            itemCount: items.length,
            itemBuilder: (context, index) {
              return _SwipeableItem(item: items[index]);
            },
          ),
        ],
      ),
    );
  }
}

class _SwipeableItem extends StatefulWidget {
  final String item;

  const _SwipeableItem({required this.item});

  @override
  State<_SwipeableItem> createState() => _SwipeableItemState();
}

class _SwipeableItemState extends State<_SwipeableItem> {
  int swipeStep = 0;
  bool hasSwiped = false;
  int? selectedAnswerIndex;

  void _handleSwipeUpdate(DragUpdateDetails details) {
    if (!hasSwiped && details.primaryDelta! < -20) {
      setState(() {
        swipeStep = (swipeStep + 1).clamp(0, 2);
        hasSwiped = true;
      });
    } else if (!hasSwiped && details.primaryDelta! > 20) {
      setState(() {
        swipeStep = 0;
        selectedAnswerIndex = null;
        hasSwiped = true;
      });
    }
  }

  void _handleSwipeEnd(DragEndDetails details) {
    hasSwiped = false;
  }

  void _selectAnswer(int index) {
    setState(() {
      selectedAnswerIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    final domanda = itemDomande[widget.item];

    if (domanda == null) {
      return Center(
        child: Text(
          'Domanda non disponibile',
          style: TextStyle(color: Colors.white, fontSize: 18),
        ),
      );
    }

    Widget content;

    final commonStyle = TextStyle(
      fontSize: 18,
      color: Colors.white,
    );

    if (swipeStep == 0) {
      content = Center(  // Utilizziamo Center per centrare esattamente l'item
        child: Align(
          alignment: Alignment.center,  // Allineamento preciso al centro
          child: Text(
            widget.item,
            key: const ValueKey('text'),
            style: commonStyle.copyWith(fontWeight: FontWeight.bold, fontSize: 22),
          ),
        ),
      );
    } else if (swipeStep == 1) {
      final domandaText = domanda['domanda'] ?? 'Domanda non disponibile';
      final risposte = (domanda['risposte'] as List?) ?? [];

      content = Column(
        key: const ValueKey('question'),
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,  // Scroll orizzontale
            child: Text(domandaText, style: commonStyle, textAlign: TextAlign.left),
          ),
          const SizedBox(height: 12),
          ...List.generate(risposte.length, (index) {
            final isSelected = selectedAnswerIndex == index;
            return GestureDetector(
              onTap: () => _selectAnswer(index),
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: 6),
                child: Row(
                  children: [
                    Text(
                      isSelected ? '✗' : '•',
                      style: TextStyle(
                        fontSize: 18,
                        color: isSelected ? Colors.redAccent : Colors.white,
                      ),
                    ),
                    const SizedBox(width: 10),
                    SingleChildScrollView(
                      scrollDirection: Axis.horizontal,  // Scroll orizzontale
                      child: Text(
                        risposte[index] ?? '',
                        style: commonStyle,
                      ),
                    ),
                  ],
                ),
              ),
            );
          }),
        ],
      );
    } else {
      final corretta = domanda['corretta'];
      final risposte = (domanda['risposte'] as List?) ?? [];
      final rispostaCorretta = corretta != null && corretta >= 0 && corretta < risposte.length
          ? risposte[corretta]
          : 'Risposta non disponibile';

      final spiegazione = domanda['spiegazione'] ?? 'Spiegazione non disponibile';

      content = Column(
        key: const ValueKey('answer'),
        crossAxisAlignment: CrossAxisAlignment.center,  // Centrato
        children: [
          Text(
            'Risposta corretta: $rispostaCorretta',
            style: commonStyle.copyWith(fontWeight: FontWeight.bold),
            textAlign: TextAlign.center,  // Centrato
          ),
          const SizedBox(height: 8),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Text(
              spiegazione,
              style: commonStyle,
              textAlign: TextAlign.center,  // Centrato
            ),
          ),
          const SizedBox(height: 16),
        ],
      );
    }

    return GestureDetector(
      onHorizontalDragUpdate: _handleSwipeUpdate,
      onHorizontalDragEnd: _handleSwipeEnd,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 300),
        margin: const EdgeInsets.symmetric(vertical: 10, horizontal: 16),
        padding: const EdgeInsets.all(16),
        height: 220,  // Altezza fissa 
        decoration: BoxDecoration(
  color: Colors.blue.shade100.withOpacity(0.5),
  borderRadius: BorderRadius.circular(28), // Bordi più rotondi
  border: Border.all(
    color: swipeStep == 0
        ? Colors.transparent
        : swipeStep == 1
            ? Colors.blue.shade300
            : Colors.blue.shade700,
               width: 3,
                    ),
          boxShadow: [
            BoxShadow(
            color: Colors.black.withOpacity(0.2),
            blurRadius: 6,
            offset: const Offset(0, 2),
            ),
          ],
        ),
        child: SingleChildScrollView( // Consente lo scroll
          child: AnimatedSwitcher(
            duration: const Duration(milliseconds: 300),
            child: content,
          ),
        ),
      ),
    );
  }
}