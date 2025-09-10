import Title from '../UI/Title';
import { certificatesDB } from '@/database/certificates';
import Certificate from '../UI/Certificate';

export default function Certificates() {
  return (
    <section className='mx-auto my-30 w-full max-w-[1280px]'>
      <Title title='Certificados' />
      {certificatesDB.map((certificate) => (
        <Certificate certificate={certificate} key={certificate.id} />
      ))}
    </section>
  );
}
