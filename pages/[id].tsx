import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.css';
import data from './example-response.json';

interface Props {
  id: string;
}

export default function ParameterRoute({ id }: Props) {
  return (
    <div className={styles.container}>
      <p>parameter: {id}</p>

      <h2>Object key:value</h2>
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <b>{key}</b>: {JSON.stringify(value)}
        </div>
      ))}

      <h2>Raw</h2>
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const id = ctx.params?.id?.toString() ?? 'unknown';

  return {
    props: { id },
  };
};
