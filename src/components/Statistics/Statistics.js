import { DataBlock, Datalist, Title } from './Statistics.styled.js';

export const Statistics = ({ stats, title }) => {
  return (
    <section>
      {title ? <Title>{title}</Title> : null}

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
