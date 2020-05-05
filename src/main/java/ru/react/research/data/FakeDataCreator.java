package ru.react.research.data;

import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.Date;
import java.util.Random;

@Service
public class FakeDataCreator {
    private Random randomizer = new Random();
    private String[] currencyLogos = {"EUR", "USD", "RUB", "KRN", "YNA"};
    private String[] statuses = {"used", "unused", "open", "closed", "deprecate"};
    private String[] phones = {"+7-987-102-63-01", "+7-901-345-35-54", "+7-923-012-893-00", "+7-954-893-23-11", "+7-394-689-02-39", "+7-483-390-40-28", "+7-239-839-66-53"};
    private String[] subjects = {"MO Office", "MO Office", "MO Office", "MO Office", "MO Office", "MO Office", "MO Office", "MO Office"};

    public Card getCard() {
        Card card = new Card();

        card.setSerialNum(getSerialNumber());
        card.setCurrencyLogo(getCurrencyLogo());
        card.setStatus(getStatus());
        card.setAuthorization(getAuthorization());
        card.setPhoneNumber(getPhoneNumber());
        card.setDeadline(getDeadline());
        card.setSubjectName(getSubject());
        card.setInventoryNum(getInventoryNum());

        return card;
    }

    private String getSubject() {
        int index = randomizer.nextInt(7);
        return subjects[index];
    }

    private Date getDeadline() {
        long val = randomizer.nextInt(100000000) + 1560000000000L;
        return new Date(val);
    }

    private String getPhoneNumber() {
        int index = randomizer.nextInt(6);
        return phones[index];
    }

    private Date getAuthorization() {
        long val = randomizer.nextInt(10000000) + 1579872031345L;
        return new Date(val);
    }

    private String getStatus() {
        int index = randomizer.nextInt(4);
        return statuses[index];
    }

    private String getCurrencyLogo() {
        int index = randomizer.nextInt(4);
        return currencyLogos[index];
    }

    private String getInventoryNum() {
        StringBuilder s = new StringBuilder();
        int len = randomizer.nextInt(10) + 1;
        for (int i = 0; i <= len; i++) {
            char c = (char) (randomizer.nextInt(58) + 65);
            s.append(c);
        }
        return s.toString();
    }

    private BigInteger getSerialNumber() {
        String val = String.valueOf(randomizer.nextInt());
        return new BigInteger(val);
    }
}
