import click

@click.command()

# Click options
@click.option(  # Defines an option for the user to specify parameters
    "--name", 
    default = "Anonimous", 
    prompt = "Enter your name", 
    help = "Name of the user"
    )    

def hello(name):
    click.echo(f"Hello {name}!")

if __name__ == "__main__":
    hello()

