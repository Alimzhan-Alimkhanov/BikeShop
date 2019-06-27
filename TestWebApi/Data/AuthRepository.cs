using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TestWebApi.Models;

namespace TestWebApi.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly BAZAContext _dbcontext;


        public AuthRepository(BAZAContext context)
        {
            _dbcontext = context;
        }


        public async Task<User> Login(string username, string password)
        {
            var user = await _dbcontext.Users.FirstOrDefaultAsync(x => x.Name == username);

            if(user==null)
            {
                return null;
            }

            if(!VerifyPasswordHash(password,user.PasswordHash,user.PasswordSalt))
            {
                return null;
            }



            return user;
        }

    

        public async Task<User> Register(User user, string passowrd)
        {
            byte[] passwordHash, passwordSalt;
            CreatePassWordHash(passowrd, out passwordHash, out passwordSalt);

            user.PasswordSalt = passwordSalt;
            user.PasswordHash = passwordHash;

            await _dbcontext.Users.AddAsync(user);
            await _dbcontext.SaveChangesAsync();

            return user;
        }

        public async Task<bool> UserExict(string username)
        {
           if(await _dbcontext.Users.AnyAsync(x => x.Name == username))
            {
                return true;
            }

            return false;
        }


        private void CreatePassWordHash(string password,out byte[] passwordHash,out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            
            }
        }
        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
               var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) { return false; }
                }
            }

            return true;
        }

    }
}
