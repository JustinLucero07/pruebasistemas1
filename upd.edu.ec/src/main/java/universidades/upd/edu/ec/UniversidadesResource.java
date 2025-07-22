package universidades.upd.edu.ec;

import java.util.List;

import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.PUT;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/universidades")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UniversidadesResource {
	@Inject
    private UniversidadService service;

    @GET
    public List<Universidades> listar() {
        return service.listar();
    }

    @POST
    public Response crear(Universidades universidades) {
        Universidades creada = service.guardar(universidades);
        return Response.status(Response.Status.CREATED).entity(creada).build();
    }

    @PUT
    @Path("/{id}")
    public Response actualizar(@PathParam("id") Long id, Universidades universidades) {
        universidades.setId(id);
        Universidades actualizada = service.actualizar(universidades);
        return Response.ok(actualizada).build();
    }

    @DELETE
    @Path("/{id}")
    public Response eliminar(@PathParam("id") Long id) {
        service.eliminar(id);
        return Response.noContent().build();
    }

    @GET
    @Path("/{id}")
    public Response obtener(@PathParam("id") Long id) {
        Universidades persona = service.obtener(id);
        if (persona != null) {
            return Response.ok(persona).build();
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }
}
