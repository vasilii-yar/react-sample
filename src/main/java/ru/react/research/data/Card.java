package ru.react.research.data;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.math.BigInteger;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "Card")
public class Card {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "serialnum")
    private BigInteger serialNum;

    @Column(name = "currencylogo")
    private String currencyLogo;

    @Column(name = "status")
    private String status;

    @Column(name = "authorization")
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date authorization;

    @Column(name = "phonenumber")
    private String phoneNumber;

    @Column(name = "deadline")
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date deadline;

    @Column(name = "subjectname")
    private String subjectName;

    @Column(name = "inventorynum")
    private String inventoryNum;

    public Card() {
    }

    public Card(BigInteger serialNum, String currencyLogo, String status, Date authorization, String phoneNumber, Date deadline, String subjectName, String inventoryNum) {
        this.serialNum = serialNum;
        this.currencyLogo = currencyLogo;
        this.status = status;
        this.authorization = authorization;
        this.phoneNumber = phoneNumber;
        this.deadline = deadline;
        this.subjectName = subjectName;
        this.inventoryNum = inventoryNum;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigInteger getSerialNum() {
        return serialNum;
    }

    public void setSerialNum(BigInteger serialNum) {
        this.serialNum = serialNum;
    }

    public String getCurrencyLogo() {
        return currencyLogo;
    }

    public void setCurrencyLogo(String currencyLogo) {
        this.currencyLogo = currencyLogo;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getAuthorization() {
        return authorization;
    }

    public void setAuthorization(Date authorization) {
        this.authorization = authorization;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getInventoryNum() {
        return inventoryNum;
    }

    public void setInventoryNum(String inventoryNum) {
        this.inventoryNum = inventoryNum;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Card card = (Card) o;
        return Objects.equals(id, card.id) &&
                Objects.equals(serialNum, card.serialNum) &&
                Objects.equals(currencyLogo, card.currencyLogo) &&
                Objects.equals(status, card.status) &&
                Objects.equals(authorization, card.authorization) &&
                Objects.equals(phoneNumber, card.phoneNumber) &&
                Objects.equals(deadline, card.deadline) &&
                Objects.equals(subjectName, card.subjectName) &&
                Objects.equals(inventoryNum, card.inventoryNum);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, serialNum, currencyLogo, status, authorization, phoneNumber, deadline, subjectName, inventoryNum);
    }

    @Override
    public String toString() {
        return "Card{" +
                "id=" + id +
                ", serialNum=" + serialNum +
                ", currencyLogo='" + currencyLogo + '\'' +
                ", status='" + status + '\'' +
                ", authorization=" + authorization +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", deadline=" + deadline +
                ", subjectName='" + subjectName + '\'' +
                ", inventoryNum='" + inventoryNum + '\'' +
                '}';
    }
}
