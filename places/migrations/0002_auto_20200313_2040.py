# Generated by Django 3.0.4 on 2020-03-13 20:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('places', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='place',
            old_name='lng',
            new_name='lon',
        ),
    ]
