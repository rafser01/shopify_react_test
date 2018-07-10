import React from 'react';
import {Grid, Card, Button } from 'semantic-ui-react'

const Order = (props) =>{
    return (
        <div>
            <Grid>
                <Grid.Column width={3}>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Card fluid>
                        <Card.Content header={props.order_number}  />
                        <Card.Content >
                        <Grid>
                            <Grid.Column width={4}>
                                <div>Total: {props.total_price}</div>
                                <div>Sub Total: {props.subtotal_price}</div>
                                <div>Tax: {props.total_tax}</div>
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <div>
                                  Create DATE:  {props.created_at}
                                </div>
                                <div>
                                Payment: {props.financial_status}
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong style={{float:'right'}}>TK : {props.total_price}</strong>
                                </div>
                                <div>
                                    <Button floated='right' positive >Details</Button>
                                </div>
                            </Grid.Column>
                        </Grid>
                        </Card.Content>
                        
                    </Card>
                </Grid.Column>
                <Grid.Column width={3}>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Order;