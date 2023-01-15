import React, { useState, useEffect } from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import img from '../../assets/projetflipper.jpg'

const CardProject = ({data}) => {
    return (

<Card shadow="xl" withBorder p="xs" radius="xs" className='card' >
      <Card.Section>
          <Text weight={1000} size={"xl"}>{data?.title}</Text>
        <Image
          src={img}
          height={250}
          width={250}        />
      </Card.Section>

      <Group position="center" mt="md" mb="xs">
          {data?.techno?.map((item) => {
           return  <Badge color="orange" variant="light">{item}</Badge>
          })}
      </Group>
      <Group position="left" mt="md" mb="xs">
      {data?.details?.map((det) => {
        return <p>{det}</p>
       })}
       </Group>
    </Card>
    )
} 

export default CardProject