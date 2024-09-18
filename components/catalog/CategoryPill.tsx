import { Button, ButtonProps } from 'react-native';

const CategoryPill = ({ title, ...btnProps }: ButtonProps) => {
  return <Button title={title} {...btnProps}></Button>;
};

export default CategoryPill;
