package ru.react.research;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ru.react.research.data.Card;
import ru.react.research.data.CardRepository;
import ru.react.research.data.FakeDataCreator;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ResearchApplication implements CommandLineRunner {
    @Autowired
    FakeDataCreator fakeData;

    @Autowired
    CardRepository cardRepository;

    public static void main(String[] args) {
        SpringApplication.run(ResearchApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        List<Card> cards = new ArrayList<>();
        for (int i = 0; i < 65; i++) {
            cards.add(fakeData.getCard());
        }
        cardRepository.saveAll(cards);
    }
}
