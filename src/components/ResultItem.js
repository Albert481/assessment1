import Card from '../Card';

const ResultItem = (props) => {
    let result = props.result
    return (
        <Card bg="white" borderRadius='3xl' mt={5} size='lg' m={5}>
            <CardBody>
                <div>
                    <label htmlFor="a">
                        {result.name}
                    </label>
                </div>
            </CardBody>

        </Card>

    );
};

export default ResultItem;