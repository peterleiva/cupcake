import { Button } from 'react-native';

type CategoryPillProps = {
  name: string;
};

const CategoryPill = ({ name }: CategoryPillProps) => {
  return <Button title={name}></Button>;
};

export default CategoryPill;
