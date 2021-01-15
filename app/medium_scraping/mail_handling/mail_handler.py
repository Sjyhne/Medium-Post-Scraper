import yagmail
import csv
import os

def get_email_list():

    email_list = []

    with open('emails.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=',')
        next(spamreader)
        for row in spamreader:
            print(','.join(row))
            email_list.append({"email": row[0], "topic": row[2], "n": row[3]})
    
    return email_list


def send_email(email, mail_info):

    user = "sandsjyhne@gmail.com"
    app_password = os.environ["APP_PASSWORD"]
    
    with yagmail.SMTP(user, app_password) as yag:
        to = email
        subject = mail_info["subject"]
        content = mail_info["content"]
        yag.send(to, subject, content)
        print("Mail successfully sent to:", to)
