## Question 1:

**Create an LWC component that displays a list of contacts from the Salesforce database. When a user clicks on a contact's name, display the contact's details, including Name, Email, and Phone Number, in the same component without navigating to a new page. Utilize Lightning Data Service (LDS) to retrieve and display the contact data**

```javaScript
import {LightningElement , wire} from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts'

export class ContactUsingLDS extends LightningElement{

    @wire(getContacts,{})
    contacts;

    handleSelectContact(event)
    {
        
    }
}

```

```HTML
<template>
    <lightning-card title = "Contact List">
        <ul>
            <template for:each ={contacts} for:item={contact} for:index= {index}>
                <li onclick = {handleSelectContact} data-id={contact.id}>
                <p>{contact.name}</p>
                </li>
            </template>
        </ul>
    </lightning-card>

</template>
```


```Java 
public with sharing class Contactcontroller{
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts()
    {
        ///qurey to get data
    }
}
```