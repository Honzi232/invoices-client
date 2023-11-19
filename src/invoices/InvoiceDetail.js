/*  _____ _______         _                      _
 * |_   _|__   __|       | |                    | |
 *   | |    | |_ __   ___| |___      _____  _ __| | __  ___ ____
 *   | |    | | '_ \ / _ \ __\ \ /\ / / _ \| '__| |/ / / __|_  /
 *  _| |_   | | | | |  __/ |_ \ V  V / (_) | |  |   < | (__ / /
 * |_____|  |_|_| |_|\___|\__| \_/\_/ \___/|_|  |_|\_(_)___/___|
 *                                _
 *              ___ ___ ___ _____|_|_ _ _____
 *             | . |  _| -_|     | | | |     |  LICENCE
 *             |  _|_| |___|_|_|_|_|___|_|_|_|
 *             |_|
 *
 *   PROGRAMOVÁNÍ  <>  DESIGN  <>  PRÁCE/PODNIKÁNÍ  <>  HW A SW
 *
 * Tento zdrojový kód je součástí výukových seriálů na
 * IT sociální síti WWW.ITNETWORK.CZ
 *
 * Kód spadá pod licenci prémiového obsahu a vznikl díky podpoře
 * našich členů. Je určen pouze pro osobní užití a nesmí být šířen.
 * Více informací na http://www.itnetwork.cz/licence
 */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { apiGet } from "../utils/api";

const InvoiceDetail = () => {
    const { id } = useParams();
    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        apiGet(`/api/invoices/` + id)
            .then((data) => {
                setInvoice(data);
            });
    }, [id]);

    return (
        <>
            <div>
                <h1>Detail faktury</h1>
                <hr />
                <h3>Faktura č. {invoice.invoiceNumber}</h3>
                <p>
                    <strong>Prodávající:</strong>
                    <br />
                    {invoice.seller?.name}
                </p>
                <p>
                    <strong>Kupující:</strong>
                    <br />
                    {invoice.buyer?.name}
                </p>
                <p>
                    <strong>Datum vystavení:</strong>
                    <br />
                    {invoice.dueDate}
                </p>
                <p>
                    <strong>Datum splatnosti:</strong>
                    <br />
                    {invoice.issued}
                </p>
                <p>
                    <strong>Produkt:</strong>
                    <br />
                    {invoice.product}
                </p>
                <p>
                    <strong>Cena:</strong>
                    <br />
                    {invoice.price} Kč
                </p>
                <p>
                    <strong>DPH:</strong>
                    <br />
                    {invoice.vat} %
                </p>
                <p>
                    <strong>Poznámka:</strong>
                    <br />
                    {invoice.note}
                </p>
            </div>
        </>
    );
};

export default InvoiceDetail;
