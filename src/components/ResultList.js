import Card from '../Card';
import ResultItem from './ResultItem';

const ResultList = (props) => {

    return (
        <Card className={classes.bg} >
            <h3>Results</h3>
            {props.results.map(result => (
                <ResultItem 
                    key={result.id}
                    result={result}
                    ></ResultItem>
            ))}
        </Card>
    )
}

export default ResultList;