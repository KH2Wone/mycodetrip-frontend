import styled from 'styled-components';
import { CgArrowLongRight } from 'react-icons/cg';
import { getParsedTime, getFlightTime } from '../../utils/getTime';

const FlightTimeInfo = ({ flightInfo }) => {
  return (
    <FlightInfo>
      <Flex>
        <span>{getParsedTime(flightInfo.departure.time)}</span>
        <CgArrowLongRight size={30} />
        <span>{getParsedTime(flightInfo.arrival.time)}</span>
      </Flex>
      <Flex>
        <Typography color="gray_500">{flightInfo.departure.code}</Typography>
        <Typography color="gray_500">
          {getFlightTime(flightInfo.departure.time, flightInfo.arrival.time)}
        </Typography>
        <Typography color="gray_500">{flightInfo.arrival.code}</Typography>
      </Flex>
    </FlightInfo>
  );
};

export default FlightTimeInfo;

const FlightInfo = styled.section`
  display: grid;
  place-items: center;

  svg {
    margin-inline: 0.5em;
    color: ${({ theme }) => theme.color.gray_500};
    transform: scale(1.5, 0.5);
  }
`;

const Typography = styled.span`
  color: ${({ theme, color }) => (color ? theme.color[color] : 'inherit')};
  font-size: 0.875rem;
`;

const Flex = styled.div`
  ${({ theme }) => theme.flex};
  gap: 0.5rem;
`;
