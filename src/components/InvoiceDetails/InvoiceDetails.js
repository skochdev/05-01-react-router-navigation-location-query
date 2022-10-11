import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getInvoiceById } from '../../fakeAPI';
import * as S from './InvoiceDetails.styled';

const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    getInvoiceById(invoiceId).then(setInvoice);
  }, [invoiceId]);

  if (!invoice) {
    return;
  }

  const {
    recipient,
    account,
    total,
    date: { created, due },
  } = invoice;

  return (
    <div>
      {invoice && (
        <S.InvoiceDetails>
          <S.Detail>
            <span>Recipient:</span> {recipient}
          </S.Detail>
          <S.Detail>
            <span>Account:</span> {account}
          </S.Detail>
          <S.Detail>
            <span>Total due:</span> {total} $
          </S.Detail>
          <S.Detail>
            <span> Invoice date:</span> {new Date(created).toLocaleDateString()}
          </S.Detail>
          <S.Detail>
            <span>Due:</span> {new Date(due).toLocaleDateString()}
          </S.Detail>
        </S.InvoiceDetails>
      )}
    </div>
  );
};

export default InvoiceDetails;
