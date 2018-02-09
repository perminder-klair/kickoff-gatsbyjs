import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

class ApolloPosts extends React.Component {
  render() {
    const { data, createCar } = this.props;

    if (data.loading) {
      return <p>loading...</p>;
    }

    return (
      <div>
        <button onClick={() => createCar({ title: 'bmw' })}>Create car</button>
        <ul>{data.allCars.map(car => <li key={car.id}>{car.title}</li>)}</ul>
      </div>
    );
  }
}

const query = gql`
  query CarsListQuery {
    allCars {
      id
      title
    }
  }
`;

const createCarMutation = gql`
  mutation createCar($title: String!) {
    createCar(title: $title) {
      id
      title
    }
  }
`;

export default compose(
  graphql(query),
  graphql(createCarMutation, {
    name: 'createCar',
    options: {
      update: (proxy, { data: { createCar } }) => {
        const data = proxy.readQuery({ query });
        data.allCars.push(createCar);
        proxy.writeQuery({ query, data });
      },
    },
    props: ({ createCar }) => ({
      createCar: input => {
        createCar({
          variables: input,
        })
          .then(result => {
            console.log('result', result); // eslint-disable-line
            alert('Car created successfully!'); // eslint-disable-line
          })
          .catch(error => {
            console.log('error', error); // eslint-disable-line
          });
      },
    }),
  }),
)(ApolloPosts);
