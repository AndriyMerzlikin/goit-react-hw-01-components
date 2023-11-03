import { DataBlock, Datalist } from './Statistics.styled.js';

export const Statistics = ({ stats, title }) => {
  return (
    <section>
      {title ? <h2>Upload stats</h2> : null}

      <Datalist>
        {stats.map(stat => (
          <DataBlock key={stat.id}>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </DataBlock>
        ))}
      </Datalist>
    </section>
  );
};
