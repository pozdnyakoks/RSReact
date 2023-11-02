import { NavLink } from 'react-router-dom';

export const PaginationButton = ({ value }: { value: string }) => {
  return <NavLink to={value}>{value}</NavLink>;
};
