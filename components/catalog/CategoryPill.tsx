import { Button, ButtonProps } from 'react-native-paper';

const CategoryPill = ({ ...btnProps }: Omit<ButtonProps, 'mode'>) => {
  return <Button mode="outlined" compact={true} {...btnProps}></Button>;
};

export default CategoryPill;
