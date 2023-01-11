 {/* <Tooltip 
      className='contact'
        wrapLines
        withArrow
        transition="fade"
        transitionDuration={200}
        label="Copier ?"
          >
        <Tooltip
        delay={300}
        position="right"
        label="Copié !"
        opened={opened2}
        >
          <ActionIcon
            component="button"
            onClick={() => {
              clipboard.copy('alexandre.lusiak@gmail.com');
              setOpened2((o) => !o);
            }}
          >
            <div>alexandre.lusiak@gmail.com </div>
        </ActionIcon>
    </Tooltip>
              </Tooltip> */}