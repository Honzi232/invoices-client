import React, { useState, useEffect, } from 'react';
import { apiGetPersonInvoices } from '../utils/api';

function PersonInvoices({ identificationNumber, typeList, typeUrl }) {

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        async function fetchInvoices() {
            const data = (identificationNumber && typeList && typeUrl)
                ? await apiGetPersonInvoices(`http://localhost:8080/api/identification/${identificationNumber}/${typeUrl}`)
                : [];
            setInvoices(data);
        };
        fetchInvoices();
    }, [identificationNumber, typeList, typeUrl]);

    return (
        <div>
            <hr />
            <h3>{typeList}</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Číslo faktury</th>
                        <th>Produkt</th>
                        <th>Cena</th>
                        <th>Prodávající</th>
                        <th>Kupující</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => (
                        <tr key={index}>
                            <td> {invoice.invoiceNumber} </td>
                            <td> {invoice.product} </td>
                            <td align="right"> {invoice.price} </td>
                            <td> {invoice.seller.name} </td>
                            <td> {invoice.buyer.name} </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default PersonInvoices;